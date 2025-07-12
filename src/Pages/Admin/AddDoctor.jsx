import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    control,
    reset
  } = useForm({
    defaultValues: {
      name: '',
      degree: '',
      speciality: '',
      photo: '',
      about: '',
      rating: 5,
      contact: {
        email: '',
        phone: ''
      },
      location: {
        branch: '',
        address: '',
        map_url: ''
      },
      services: [''],
      education: [{ institute: '', degree: '', years: '' }],
      experience: [{ organization: '', position: '', years: '' }],
      awards: [{ title: '', date: '' }],
      specializations: [''],
      business_hours: {
        Sunday: '',
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: ''
      },
      available_days: ['']
    }
  });

  const { fields: serviceFields, append: appendService } = useFieldArray({ control, name: 'services' });
  const { fields: eduFields, append: appendEdu } = useFieldArray({ control, name: 'education' });
  const { fields: expFields, append: appendExp } = useFieldArray({ control, name: 'experience' });
  const { fields: awardFields, append: appendAward } = useFieldArray({ control, name: 'awards' });
  const { fields: specFields, append: appendSpec } = useFieldArray({ control, name: 'specializations' });
  const { fields: dayFields, append: appendDay } = useFieldArray({ control, name: 'available_days' });

  const onSubmit = (data) => {
    console.log(data)
    const res = axiosSecure.post('/doctors', data);
    console.log('Success:', res);
    Swal.fire({
      title: "Doctor Added Successfully!",
      icon: "success",
      draggable: true
    });
    reset();

  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input {...register('name')} placeholder="Name" className="input input-bordered" required />
        <input {...register('degree')} placeholder="Degree" className="input input-bordered" required />
        <input {...register('speciality')} placeholder="Speciality" className="input input-bordered" required />
        <input {...register('photo')} placeholder="Photo URL" className="input input-bordered" required />
        <input {...register('rating')} type="number" min={1} max={5} className="input input-bordered" placeholder="Rating" />

        <textarea {...register('about')} placeholder="About" className="textarea textarea-bordered col-span-1 md:col-span-2" required />

        {/* Contact */}
        <input {...register('contact.email')} placeholder="Email" className="input input-bordered" />
        <input {...register('contact.phone')} placeholder="Phone" className="input input-bordered" />

        {/* Location */}
        <input {...register('location.branch')} placeholder="Branch Name" className="input input-bordered" />
        <input {...register('location.address')} placeholder="Address" className="input input-bordered" />
        <input {...register('location.map_url')} placeholder="Google Maps URL" className="input input-bordered" />

        {/* Services */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Services</label>
          {serviceFields.map((field, index) => (
            <input key={field.id} {...register(`services.${index}`)} className="input input-bordered w-full mb-2" />
          ))}
          <button type="button" className="btn btn-sm btn-outline" onClick={() => appendService('')}>+ Add Service</button>
        </div>

        {/* Education */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Education</label>
          {eduFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              <input {...register(`education.${index}.institute`)} placeholder="Institute" className="input input-bordered" />
              <input {...register(`education.${index}.degree`)} placeholder="Degree" className="input input-bordered" />
              <input {...register(`education.${index}.years`)} placeholder="Years" className="input input-bordered" />
            </div>
          ))}
          <button type="button" className="btn btn-sm btn-outline" onClick={() => appendEdu({})}>+ Add Education</button>
        </div>

        {/* Experience */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Experience</label>
          {expFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
              <input {...register(`experience.${index}.organization`)} placeholder="Organization" className="input input-bordered" />
              <input {...register(`experience.${index}.position`)} placeholder="Position" className="input input-bordered" />
              <input {...register(`experience.${index}.years`)} placeholder="Years" className="input input-bordered" />
            </div>
          ))}
          <button type="button" className="btn btn-sm btn-outline" onClick={() => appendExp({})}>+ Add Experience</button>
        </div>

        {/* Awards */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Awards</label>
          {awardFields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-2 gap-2 mb-2">
              <input {...register(`awards.${index}.title`)} placeholder="Title" className="input input-bordered" />
              <input {...register(`awards.${index}.date`)} placeholder="Date" className="input input-bordered" />
            </div>
          ))}
          <button type="button" className="btn btn-sm btn-outline" onClick={() => appendAward({})}>+ Add Award</button>
        </div>

        {/* Specializations */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Specializations</label>
          {specFields.map((field, index) => (
            <input key={field.id} {...register(`specializations.${index}`)} className="input input-bordered w-full mb-2" />
          ))}
          <button type="button" className="btn btn-sm btn-outline" onClick={() => appendSpec('')}>+ Add Specialization</button>
        </div>

        {/* Business Hours */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Business Hours</label>
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <input key={day} {...register(`business_hours.${day}`)} placeholder={`${day} Hours`} className="input input-bordered w-full mb-2" />
          ))}
        </div>

        {/* Available Days */}
        <div className="col-span-1 md:col-span-2">
          <label className="font-semibold">Available Days</label>
          {dayFields.map((field, index) => (
            <input key={field.id} {...register(`available_days.${index}`)} className="input input-bordered w-full mb-2" />
          ))}
          <button type="button" className="btn btn-sm btn-outline" onClick={() => appendDay('')}>+ Add Day</button>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary col-span-1 md:col-span-2 mt-4">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;

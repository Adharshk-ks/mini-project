import React from 'react';
import bgImg from '../assets/th.jpg';
import img1 from '../assets/sait.jpg';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <div className="logo">
            <img src={img1} alt="Logo" />
          </div>
          <h2>Jump into Hopscotch</h2>
          <span>
            Already a <span className="highlight">Hopscotcher</span>?<span className="sign-in"> Sign In</span>
          </span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")} placeholder="E-mail" />
           
            
            <CurvedButton />
          </form>

          <div className="col-1">
            <div className='terms'>
            <span>
              By continuing you agree to our <span className="highlight">Privacy Policy</span> & <span className="highlight">Terms of Use</span>
            </span>
          </div>
        </div>
        </div>

        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
};

const CurvedButton = () => {
  return <button className="btn">Continue</button>;
};

export default Form;

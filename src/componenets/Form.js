import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Helmet } from "react-helmet";


function Forms() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [successMsg, setSuccessMsg] = useState("");
    const onSubmit = data => {
        console.log(data);
        setSuccessMsg("All Values good, Form submitted");
    }

    return (
        <section className="form-section">
            <Helmet>
                <title>Adding Character</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type='text' placeholder="Enter Name" name="name"
                        {...register("name", { required: "Name is required", pattern: { value: /^[a-zA-Z ]*$/, message: "Please Enter Letters only in Name" } })}
                        minLength={2}
                    />
                    <div className='message'>
                        {errors.name && <p className="message" role="alert">{errors.name?.message}</p>}
                    </div>
                </div>

                <div className='row-input'>
                    <div>
                        <input type="text" placeholder="Eye Color" name="eye" className='eye-color-input'
                            {...register("eye", { required: 'Eye Color is required.' })}
                            minLength={3}
                        />
                        <div className='message'>
                            {errors.eye && <p className="message" role="alert">{errors.eye?.message}</p>}
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder="Hair Color" name="hair" className='hair-color-input'
                            {...register("hair", { required: "Hair Color is required" })}
                            minLength={3}
                        />
                        <div className='message'>
                            {errors.hair && <p className="message" role="alert">{errors.hair?.message}</p>}
                        </div>
                    </div>
                </div>

                <div>
                    <input type='date' placeholder="Enter Birthday" name="birthday" className='birthday-input'
                        {...register("birthday", { required: "Birthday is required" })} />
                    <div className='message'>
                        {errors.birthday && <p className="message" role="alert">{errors.birthday?.message}</p>}
                    </div>
                </div>
                <div>
                    <select name="gender" {...register("gender", { required: "Gender is required" })}>
                        <option value="">Please select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="non-binary">Non-Binary</option>
                        <option value="other">Other</option>
                        <option value="Prefer not to answer">Perfer not to Answer</option>
                    </select>
                    <div className='message'>
                        {errors.gender && <p className="message" role="alert">{errors.gender?.message}</p>}
                    </div>
                </div>
                <div>
                    <input type='text' placeholder="Enter House Name" name="house"
                        {...register("house", { required: "House Name is required" })} />
                    <div className='message'>
                        {errors.house && <p className="message" role="alert">{errors.house?.message}</p>}
                    </div>
                </div>
                <div className='message'>
                    {successMsg}
                </div>
                <div className='button'>
                    <input type='submit' value="Submit" className='submit' />
                </div>
            </form>
        </section>
    )
}

export default Forms;
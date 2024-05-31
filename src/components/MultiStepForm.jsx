import React, { useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
  };

  const setProgressBar = () => {
    const steps = 4;
    const percent = ((currentStep - 1) / (steps - 1)) * 100;
    return `${percent}%`;
  };

  return (
    <div className="min-h-screen flex justify-center items-center my-10 border-0 border-red-500">
      <div className="w-full max-w-md p-4">
        <div className="bg-white rounded-lg p-6 shadow-xl border-0 border-red-500">
          <h2  className="text-xl font-bold text-purple-700 uppercase">Sign Up Your User Account</h2>
          <p className="text-gray-600">Fill all form fields to go to the next step</p>
          <form id="msform" className="mt-4">
            <ul id="progressbar" className="flex justify-between mb-6">
              <li className={`w-1/4 text-center ${currentStep >= 1 ? "text-purple-700" : "text-gray-400"}`}><strong>Account</strong></li>
              <li className={`w-1/4 text-center ${currentStep >= 2 ? "text-purple-700" : "text-gray-400"}`}><strong>Personal</strong></li>
              <li className={`w-1/4 text-center ${currentStep >= 3 ? "text-purple-700" : "text-gray-400"}`}><strong>Image</strong></li>
              <li className={`w-1/4 text-center ${currentStep >= 4 ? "text-purple-700" : "text-gray-400"}`}><strong>Finish</strong></li>
            </ul>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div className="bg-purple-700 h-2 rounded-full" style={{ width: setProgressBar() }}></div>
            </div>

            {currentStep === 1 && (
              <fieldset>
                <div className="form-card text-left">
                  <div className="flex justify-between">
                    <h2 className="fs-title text-2xl font-semibold text-purple-700 mb-4">Account Information:</h2>
                    <h2 className="steps text-lg text-gray-500">Step 1 - 4</h2>
                  </div>
                  <label className="fieldlabels block text-gray-600 mb-2">Email: *</label>
                  <input type="email" name="email" placeholder="Email Id" className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Username: *</label>
                  <input type="text" name="uname" placeholder="UserName" className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Password: *</label>
                  <input type="password" name="pwd" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Confirm Password: *</label>
                  <input type="password" name="cpwd" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded mb-4" />
                </div>
                <button type="button" className="next action-button bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={nextStep}>Next</button>
              </fieldset>
            )}

            {currentStep === 2 && (
              <fieldset>
                <div className="form-card text-left">
                  <div className="flex justify-between">
                    <h2 className="fs-title text-2xl font-semibold text-purple-700 mb-4">Personal Information:</h2>
                    <h2 className="steps text-lg text-gray-500">Step 2 - 4</h2>
                  </div>
                  <label className="fieldlabels block text-gray-600 mb-2">First Name: *</label>
                  <input type="text" name="fname" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Last Name: *</label>
                  <input type="text" name="lname" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Contact No.: *</label>
                  <input type="text" name="phno" placeholder="Contact No." className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Alternate Contact No.: *</label>
                  <input type="text" name="phno_2" placeholder="Alternate Contact No." className="w-full p-2 border border-gray-300 rounded mb-4" />
                </div>
                <button type="button" className="next action-button bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={nextStep}>Next</button>
                <button type="button" className="previous action-button-previous bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={prevStep}>Previous</button>
              </fieldset>
            )}

            {currentStep === 3 && (
              <fieldset>
                <div className="form-card text-left">
                  <div className="flex justify-between">
                    <h2 className="fs-title text-2xl font-semibold text-purple-700 mb-4">Image Upload:</h2>
                    <h2 className="steps text-lg text-gray-500">Step 3 - 4</h2>
                  </div>
                  <label className="fieldlabels block text-gray-600 mb-2">Upload Your Photo:</label>
                  <input type="file" name="pic" accept="image/*" className="w-full p-2 border border-gray-300 rounded mb-4" />
                  <label className="fieldlabels block text-gray-600 mb-2">Upload Signature Photo:</label>
                  <input type="file" name="pic" accept="image/*" className="w-full p-2 border border-gray-300 rounded mb-4" />
                </div>
                <button type="button" className="next action-button bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={nextStep}>Submit</button>
                <button type="button" className="previous action-button-previous bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={prevStep}>Previous</button>
              </fieldset>
            )}

            {currentStep === 4 && (
              <fieldset>
                <div className="form-card text-left">
                  <div className="flex justify-between">
                    <h2 className="fs-title text-2xl font-semibold text-purple-700 mb-4">Finish:</h2>
                    <h2 className="steps text-lg text-gray-500">Step 4 - 4</h2>
                  </div>
                  <br /><br />
                  <h2 className="purple-text text-center text-3xl font-semibold text-purple-700"><strong>SUCCESS !</strong></h2>
                  <br />
                  <div className="flex justify-center">
                    <div className="w-1/4">
                      <img src="https://i.imgur.com/GwStPmg.png" className="fit-image" alt="success" />
                    </div>
                  </div>
                  <br /><br />
                  <div className="flex justify-center">
                    <div className="text-center">
                      <h5 className="purple-text text-center text-purple-700">You Have Successfully Signed Up</h5>
                    </div>
                  </div>
                </div>
              </fieldset>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

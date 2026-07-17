import { ApplicationStepper } from "./ApplicationStepper";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { StepFive } from "./StepFive";
import { StepSix } from "./StepSix";
import { StepSeven } from "./StepSeven";

export function ApplicationForm({ step, setStep, setStoreData, storeData }) {
  const handleChange = (e) => {
    const { name, value } = e.target.value;

    setStoreData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setStoreData((prev) => ({
      ...prev,
      logo: file,
      banner: file,
      logoPreview: URL.createObjectURL(file),
      bannerPreview: URL.createObjectURL(file),
    }));
  };

  return (
    <>
      <ApplicationStepper step={step} setStep={setStep} />

      {step === 1 && (
        <StepOne
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )}

      {step === 2 && (
        <StepTwo setStep={setStep} handleFileChange={handleFileChange} />
      )}

      {step === 3 && (
        <StepThree
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )}

      {step === 4 && (
        <StepFour
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )}

      {step === 5 && (
        <StepFive
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )}

      {step === 6 && (
        <StepSix
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )}

      {step === 7 && (
        <StepSeven
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )}
    </>
  );
}

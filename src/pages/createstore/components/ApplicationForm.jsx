import { Form, Button } from "react-bootstrap";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
//import { StepFive } from "./StepFive";
//import { StepSix } from "./StepSix";
//import { StepSeven } from "./StepSeven";

export function ApplicationForm({
  step,
  setStep,
  setStoreData,
  storeData,
  errors,
  setErrors,
  setIsPublish,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStoreData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setStoreData((prev) => ({
      ...prev,
      logo: file,
      logoPreview: URL.createObjectURL(file),
    }));
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setStoreData((prev) => ({
      ...prev,
      banner: file,
      bannerPreview: URL.createObjectURL(file),
    }));
  };

  return (
    <>
      <Form>
        {step === 1 && (
          <StepOne
            setStep={setStep}
            handleChange={handleChange}
            storeData={storeData}
            errors={errors}
            setErrors={setErrors}
          />
        )}

        {step === 2 && (
          <StepTwo
            setStep={setStep}
            handleLogoChange={handleLogoChange}
            handleBannerChange={handleBannerChange}
            errors={errors}
            setErrors={setErrors}
          />
        )}

        {step === 3 && (
          <StepThree
            setStep={setStep}
            handleChange={handleChange}
            storeData={storeData}
            errors={errors}
            setErrors={setErrors}
          />
        )}

        {step === 4 && (
          <StepFour
            setStep={setStep}
            handleChange={handleChange}
            storeData={storeData}
            errors={errors}
            setErrors={setErrors}
          />
        )}

        <Button
          onClick={() => setIsPublish(!false)}
          className={`px-5 fs-3 text-dark d-flex mt-5 ms-auto ${step === 4 ? "d-block" : "d-none"}`}
          type="submit"
          style={{ background: "#ffee00", border: "none" }}
        >
          publish
        </Button>
      </Form>

      {/* 
      {step === 5 && (
        <StepFive
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )} */}

      {/*  {step === 6 && (
        <StepSix
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )} */}

      {/* {step === 7 && (
        <StepSeven
          setStep={setStep}
          handleChange={handleChange}
          storeData={storeData}
        />
      )} */}
    </>
  );
}

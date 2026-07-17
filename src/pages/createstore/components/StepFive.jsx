import { Form, InputGroup } from "react-bootstrap";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const BANKS = [
  { code: "044", name: "Access Bank" },
  { code: "063", name: "Access Bank (Diamond)" },
  { code: "035A", name: "ALAT by Wema" },
  { code: "401", name: "ASO Savings and Loans" },
  { code: "50931", name: "Bowen Microfinance Bank" },
  { code: "023", name: "Citibank Nigeria" },
  { code: "050", name: "Ecobank Nigeria" },
  { code: "562", name: "Ekondo Microfinance Bank" },
  { code: "070", name: "Fidelity Bank" },
  { code: "011", name: "First Bank of Nigeria" },
  { code: "214", name: "First City Monument Bank (FCMB)" },
  { code: "00103", name: "Globus Bank" },
  { code: "058", name: "Guaranty Trust Bank (GTBank)" },
  { code: "030", name: "Heritage Bank" },
  { code: "301", name: "Jaiz Bank" },
  { code: "082", name: "Keystone Bank" },
  { code: "50211", name: "Kuda Bank" },
  { code: "303", name: "Lotus Bank" },
  { code: "50563", name: "Mint Finex MFB" },
  { code: "50515", name: "Moniepoint Microfinance Bank" },
  { code: "056", name: "Nova Merchant Bank" },
  { code: "999992", name: "OPay (Paycom)" },
  { code: "526", name: "Parallex Bank" },
  { code: "999991", name: "PalmPay" },
  { code: "076", name: "Polaris Bank" },
  { code: "101", name: "Providus Bank" },
  { code: "125", name: "Rubies Bank" },
  { code: "51310", name: "Signature Bank" },
  { code: "221", name: "Stanbic IBTC Bank" },
  { code: "068", name: "Standard Chartered Bank" },
  { code: "232", name: "Sterling Bank" },
  { code: "100", name: "Suntrust Bank" },
  { code: "302", name: "TAJ Bank" },
  { code: "102", name: "Titan Trust Bank" },
  { code: "032", name: "Union Bank of Nigeria" },
  { code: "033", name: "United Bank for Africa (UBA)" },
  { code: "215", name: "Unity Bank" },
  { code: "035", name: "Wema Bank" },
  { code: "057", name: "Zenith Bank" },
];

export function StepFive({ setStep, handleChange, storeData }) {
  return (
    <>
      <h3 className=" fs-3 mb-2">Payment Details</h3>

      <Form>
        <Form.Group className=" mt-5">
          <Form.Label>Bank Name *</Form.Label>
          <Form.Select
            name="bankName"
            value={storeData.bankName}
            onChange={handleChange}
            required
          >
            <option>select your bank</option>
            {BANKS.map((b) => {
              return (
                <option key={b.code} value={b.name}>
                  {b.name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className=" my-5">
          <Form.Label>Account Name *</Form.Label>
          <Form.Control
            name="accountName"
            value={storeData.accountName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className=" my-5">
          <Form.Label>Account Number *</Form.Label>
          <Form.Control
            name="accountNo"
            value={storeData.accountNo}
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form>

      <div className="d-flex">
        <button onClick={() => setStep(3)} className="px-3 py-2 mt-5 next-btn">
          <BsArrowLeft style={{ color: "#facc15", fontSize: "35px" }} />
        </button>

        <button
          onClick={() => setStep(5)}
          className="px-3 py-2 mt-5  ms-auto next-btn"
        >
          <BsArrowRight style={{ color: "#facc15", fontSize: "35px" }} />
        </button>
      </div>
    </>
  );
}

import { useState } from "react";
import { Form } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";

export function BankDetails({
  BANKS,
  accNumber,
  setAccNumber,
  bank,
  setBank,
  accName,
  setAccName,
  loading,
  setLoading,
}) {
  const [change, setChange] = useState(false);

  const handleSave = () => {
    try {
      set;
      //await axios.post("", { bank, accNumber, accName});
      setChange(false);
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <div style={{ margin: "110px 0" }}>
      <h5 className="mb-4">Withdraw to</h5>

      <div className=" px-4 px-sm-5 py-4" style={{ background: "#101606a4" }}>
        <div className="d-flex justify-content-between align-items-center gap-4">
          <div className={`text-center ${change ? "d-none" : "d-block"}`}>
            <h2>Amuleagbagun Samuel Adeolu</h2>
            <h4 className="my-3">Sterling Bank</h4>
            <h6>0061333894</h6>
          </div>

          <h5
            onClick={() => setChange(!false)}
            style={{ color: "#facc15", cursor: "pointer" }}
          >
            {change ? "" : "Change"}
          </h5>
        </div>

        {change && (
          <>
            <div className="d-flex justify-content-between">
              <h5
                className="ms-auto my-2 "
                onClick={handleSave}
                style={{ color: "#facc15", cursor: "pointer" }}
              >
                Save
              </h5>
            </div>

            <div>
              <Form.Group>
                <Form.Label>
                  <h6>Bank Name</h6>{" "}
                </Form.Label>
                <Form.Select
                  required
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                >
                  <option value="">Select your bank</option>
                  {BANKS.map((b) => {
                    return <option>{b}</option>;
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="my-5">
                <Form.Label>
                  <h6>Account Number </h6>
                </Form.Label>
                <Form.Control
                  required
                  value={accNumber}
                  onChange={(e) => setAccNumber(e.target.value)}
                  placeholder="0123456789"
                  maxLength={10}
                />
              </Form.Group>
              <Form.Group className="my-5">
                <Form.Label>
                  <h6>Account name</h6>{" "}
                </Form.Label>
                <Form.Control
                  readOnly
                  required
                  value={accName}
                  onChange={(e) => setAccName(e.target.value)}
                  placeholder="Auto-filled after verification"
                />
              </Form.Group>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

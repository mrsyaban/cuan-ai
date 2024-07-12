import { useState, ChangeEvent } from "react";
import axios from "axios";

const RiskProfileTest = () => {
  const [formData, setFormData] = useState({
    birthDate: "",
    marriageStatus: "",
    revenue: "",
    totalWealth: "",
    investmentPriority: "",
    reactionToLoss: "",
  });

  const [errors, setErrors] = useState({
    birthDate: false,
    marriageStatus: false,
    revenue: false,
    totalWealth: false,
    investmentPriority: false,
    reactionToLoss: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validate = () => {
    const newErrors = {
      birthDate: !formData.birthDate,
      marriageStatus: !formData.marriageStatus,
      revenue: !formData.revenue,
      totalWealth: !formData.totalWealth,
      investmentPriority: !formData.investmentPriority,
      reactionToLoss: !formData.reactionToLoss,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const onSubmit = async () => {
    if (validate()) {
      try {
        const res = await axios.post(`${import.meta.env}/api/risk-profile`, formData);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex justify-center p-4 py-8 w-screen">
      <div className="flex flex-col gap-8">
        <h1 className="font-semibold">Risk Profile Test</h1>
        <div className="mb-4">
          <label className="block text-white">1. Date of Birth</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded w-full ${errors.birthDate ? "border-red-500" : ""}`}
          />
          {errors.birthDate && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="flex flex-col gap-4">
          <label className="block text-white">2. Are you married and have family responsibilities?</label>
          <div className="flex flex-col gap-2 ml-4">
            {[
                "Single", 
                "Married, no child and have no financial dependents", 
                "Married, with 1 child", 
                "Married, with 2 childs or more", 
                "On retirement / financially well established"
            ].map((status, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="marriageStatus"
                  value={status}
                  checked={formData.marriageStatus === status}
                  onChange={handleChange}
                  className="mr-2"
                />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </label>
            ))}
          </div>
          {errors.marriageStatus && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-white">3. What is the monthly income in your household (including partner's income, passive income, etc.)</label>
          <input
            type="number"
            name="revenue"
            value={formData.revenue}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded w-full ${errors.revenue ? "border-red-500" : ""}`}
          />
          {errors.revenue && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-white">4. What is the total value of your wealth?</label>
          <input
            type="number"
            name="totalWealth"
            value={formData.totalWealth}
            onChange={handleChange}
            className={`mt-1 p-2 border rounded w-full ${errors.totalWealth ? "border-red-500" : ""}`}
          />
          {errors.totalWealth && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="flex flex-col gap-4">
          <label className="block text-white">5. What do you prioritize when investing?</label>
          <div className="flex flex-col gap-2 ml-4">
            {["maximizeReturns", "avoidLosses", "bothImportant"].map((priority, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="investmentPriority"
                  value={priority}
                  checked={formData.investmentPriority === priority}
                  onChange={handleChange}
                  className="mr-2"
                />
                {priority.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + priority.replace(/([A-Z])/g, ' $1').slice(1)}
              </label>
            ))}
          </div>
          {errors.investmentPriority && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="flex flex-col gap-4">
          <label className="block text-white">6. If investments fall 15% in a month with uncertain market, what you will do?</label>
          <div className="flex flex-col gap-2 ml-4">
            {["hold", "sell", "buyMore", "seekAdvice"].map((reaction, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="reactionToLoss"
                  value={reaction}
                  checked={formData.reactionToLoss === reaction}
                  onChange={handleChange}
                  className="mr-2"
                />
                {reaction.charAt(0).toUpperCase() + reaction.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
            ))}
          </div>
          {errors.reactionToLoss && <span className="text-red-500">This field is required</span>}
        </div>

        <div onClick={onSubmit} className="flex px-8 py-2 bg-blue-500 rounded-md font-semibold w-fit cursor-pointer">
          Submit
        </div>
      </div>
    </div>
  );
};

export default RiskProfileTest;

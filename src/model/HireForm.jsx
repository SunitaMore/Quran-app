import { useState } from "react";

export default function HireForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyLocation: "",
    companyWebsite: "",
    companyPhone: "",
    requirements: [
      {
        experience: "",
        numberOfRequirements: "",
        techStack: "",
        checklist: "",
        contactEmail: "",
      },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("requirements.")) {
      // Handle requirements fields
      const [index, subField] = name.split(".");
      const updatedRequirements = [...formData.requirements];
      updatedRequirements[index][subField] = value;

      setFormData((prevData) => ({
        ...prevData,
        requirements: updatedRequirements,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const addRequirement = () => {
    setFormData((prevData) => ({
      ...prevData,
      requirements: [
        ...prevData.requirements,
        {
          experience: "",
          numberOfRequirements: "",
          techStack: "",
          checklist: "",
          contactEmail: "",
        },
      ],
    }));
  };

  const removeRequirement = (index) => {
    const updatedRequirements = [...formData.requirements];
    updatedRequirements.splice(index, 1);

    setFormData((prevData) => ({
      ...prevData,
      requirements: updatedRequirements,
    }));
  };

  const sendEmail = async () => {
    // EmailJS implementation placeholder
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      await sendEmail();
      setSubmitStatus({
        success: true,
        message:
          "Your hiring request has been submitted successfully! We will contact you soon.",
      });
      handleCancel();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "There was an error submitting your request. Please try again later.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      companyName: "",
      companyLocation: "",
      companyWebsite: "",
      companyPhone: "",
      requirements: [
        {
          experience: "",
          numberOfRequirements: "",
          techStack: "",
          checklist: "",
          contactEmail: "",
        },
      ],
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Hire From Us
      </h2>

      {submitStatus.message && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Details Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Company Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Company Name */}
            <div className="col-span-6">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Company Name */}
            <div className="col-span-6">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Company Email <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company Website */}
            <div className="col-span-6">
              <label
                htmlFor="companyWebsite"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>

            {/* Company Phone */}
            <div className="col-span-6">
              <label
                htmlFor="companyPhone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="companyPhone"
                name="companyPhone"
                value={formData.companyPhone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            
            {/* Company Location */}
            <div className="col-span-12">
              <label
                htmlFor="companyLocation"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Location <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="companyLocation"
                name="companyLocation"
                value={formData.companyLocation}
                
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border h-24 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Hiring Requirements
          </h3>

          {formData.requirements.map((req, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border p-4 rounded-lg"
            >
              {/* Experience */}
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Required Experience <span className="text-red-600">*</span>
                </label>
                <select
                  name={`requirements.${index}.experience`}
                  value={req.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              {/* Number of Requirements */}
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  No. of Openings <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  name={`requirements.${index}.numberOfRequirements`}
                  value={req.numberOfRequirements}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Tech Stack */}
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tech Stack <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name={`requirements.${index}.techStack`}
                  value={req.techStack}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., React, Node.js, MongoDB"
                />
              </div>
              {/* Contact Email */}
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name={`requirements.${index}.contactEmail`}
                  value={req.contactEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Checklist */}
              <div className="col-span-12">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key Requirements
                </label>
                <textarea
                  name={`requirements.${index}.checklist`}
                  value={req.checklist}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Must-have skills/qualifications"
                />
              </div>

              <div className="col-span-1 flex items-end">
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}

          <div className="flex justify-start">
            <button
              type="button"
              onClick={addRequirement}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              + Add Another Position
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isSubmitting ? "Submitting..." : "Submit Hiring Request"}
          </button>
        </div>
      </form>
    </div>
  );
}

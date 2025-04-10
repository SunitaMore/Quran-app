import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courses: [],
    it: false,
    age: "",
    gender: "",
    education: "",
    batchTime: "",
    experienceLevel: "",
    resume: null,
    learningMode: "", // Added learning mode field
    comments: "",
    experiences: [
      {
        company: "",
        role: "",
        techStack: "",
        duration: "",
      },
    ],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "courses") {
      // Handle multi-select courses
      const selectedCourses = [...formData.courses];
      if (checked) {
        selectedCourses.push(value);
      } else {
        const index = selectedCourses.indexOf(value);
        if (index > -1) {
          selectedCourses.splice(index, 1);
        }
      }

      setFormData((prevData) => ({
        ...prevData,
        courses: selectedCourses,
      }));
    } else if (name.startsWith("experiences.")) {
      // Handle experience fields
      const [index, subField] = name.split(".");
      const updatedExperiences = [...formData.experiences];
      updatedExperiences[index][subField] = value;

      setFormData((prevData) => ({
        ...prevData,
        experiences: updatedExperiences,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]:
          type === "checkbox" ? checked : type === "file" ? files[0] : value,
      }));
    }
  };

  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        {
          company: "",
          role: "",
          techStack: "",
          duration: "",
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences.splice(index, 1);

    setFormData((prevData) => ({
      ...prevData,
      experiences: updatedExperiences,
    }));
  };

  const sendEmail = async () => {
    // EmailJS implementation placeholder
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.courses.length === 0) {
      setSubmitStatus({
        success: false,
        message: "Please select at least one course",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      await sendEmail();
      setSubmitStatus({
        success: true,
        message:
          "Your application has been submitted successfully! We will contact you soon.",
      });
      handleCancel();
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "There was an error submitting your application. Please try again later.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      courses: [],
      it: false,
      gender: "",
      education: "",
      batchTime: "",
      experienceLevel: "",
      resume: null,
      learningMode: "", // Reset learning mode
      comments: "",
      experiences: [
        {
          company: "",
          role: "",
          techStack: "",
          duration: "",
        },
      ],
    });
    const fileInput = document.getElementById("resume");
    if (fileInput) fileInput.value = "";
  };

  const courseOptions = [
    { id: "web-development", label: "Web Development" },
    { id: "data-science", label: "Data Science" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "cyber-security", label: "Cyber Security" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "mobile-dev", label: "Mobile App Development" },
    { id: "cloud-computing", label: "Cloud Computing" },
    { id: "artificial-intelligence", label: "Artificial Intelligence" },
  ];
  const nonItCourseOptions = [
    { id: "hr-essentials", label: "HR Essentials" },
    { id: "personality-devlopment", label: "Personality Devlopment" },
    { id: "ms-office", label: "MS Office" },
    { id: "recruitment-and-", label: "Recruitment and Staffing" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Application Form
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Name */}
          <div className="col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Location <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Age */}
          <div className="col-span-3">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div className="col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* Phone */}
          <div className="col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number<span className="text-red-600">*</span>{" "}
              <span className="text-gray-600 text-[0.7rem]">
                (Whatsapp No.)
              </span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Alternative Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Work Experience
          </h3>

          {formData.experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border p-4 rounded-lg"
            >
              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name={`experiences.${index}.company`}
                  value={exp.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last company worked"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role/Position
                </label>
                <input
                  type="text"
                  name={`experiences.${index}.role`}
                  value={exp.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your role in company"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tech Stack
                </label>
                <input
                  type="text"
                  name={`experiences.${index}.techStack`}
                  value={exp.techStack}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Technologies worked with"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  name={`experiences.${index}.duration`}
                  value={exp.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 2 years"
                />
              </div>

              <div className="flex justify-end mt-2 -ml-4">
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="flex justify-start w-88">
                <button
                  type="button"
                  onClick={addExperience}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  + Add Another Experience
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Courses <span className="text-red-600">*</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* IT Courses */}
            <div className="col-span-2">
              <h3 className="text-sm font-semibold  mb-2">IT Courses</h3>
              <div className="grid grid-cols-2 gap-2">
                {courseOptions.map((course) => (
                  <div key={course.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={course.id}
                      name="courses"
                      value={course.id}
                      checked={formData.courses.includes(course.id)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={course.id}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {course.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-IT Courses */}
            <div>
              <h3 className="text-sm font-semibold  mb-2">Non-IT Courses</h3>
              <div className="grid grid-cols-1 gap-2">
                {nonItCourseOptions.map((course) => (
                  <div key={course.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={course.id}
                      name="courses"
                      value={course.id}
                      checked={formData.courses.includes(course.id)}
                      onChange={handleChange}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={course.id}
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {course.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {formData.courses.length === 0 && (
            <p className="text-xs text-red-500 mt-1">
              Please select at least one course
            </p>
          )}
        </div>

        {/* Education */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <label
              htmlFor="education"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Highest Education <span className="text-red-600">*</span>
            </label>
            <select
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your Highest education level</option>
              <option value="high-school">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">Ph.D.</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Batch Time */}
          <div className="col-span-6">
            <label
              htmlFor="batchTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preferred Batch Time
            </label>
            <select
              id="batchTime"
              name="batchTime"
              value={formData.batchTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select preferred time</option>
              <option value="morning">Morning (9 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
              <option value="weekend">Weekend Batch</option>
            </select>
          </div>

          {/* Experience Level */}
          <div className="col-span-4">
            <label
              htmlFor="experienceLevel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Experience Level
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div className="col-span-4">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Resume/CV <span className="text-red-600">*</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: PDF, DOC, DOCX (Max size: 2MB)
            </p>
          </div>

          {/* Mode of Learning - Added this new field */}
          <div className="col-span-4">
            <label
              htmlFor="learningMode"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preferred Mode of Learning <span className="text-red-600">*</span>
            </label>
            <select
              id="learningMode"
              name="learningMode"
              value={formData.learningMode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select learning mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline (In-person)</option>
              <option value="hybrid">Hybrid (Online + Offline)</option>
            </select>
          </div>
        </div>

        {/* Comments */}
        <div>
          <label
            htmlFor="comments"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Additional Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us anything else that might be relevant to your application"
          />
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <NavLink
            to="/"
            onClick={handleCancel}
            className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancel
          </NavLink>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

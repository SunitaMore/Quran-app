import { useState } from "react";

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
    comments: "",
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
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]:
          type === "checkbox" ? checked : type === "file" ? files[0] : value,
      }));
    }
  };

  const sendEmail = async () => {
    // This is a placeholder function showing how to implement EmailJS
    // You'll need to include the EmailJS script in your HTML and replace with your actual service, template and user IDs

    // For demonstration - in a real implementation you would:
    // 1. Include EmailJS script in index.html:
    // <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

    // 2. Initialize EmailJS in your component or in a useEffect:
    // emailjs.init("YOUR_USER_ID");

    // 3. Prepare template parameters

    // 4. Since we can't directly include EmailJS in this artifact, here's the code you would use:
    // return emailjs.send(
    //   "YOUR_SERVICE_ID",
    //   "YOUR_TEMPLATE_ID",
    //   templateParams
    // );

    // For this demo, we'll simulate a successful response
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
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
      // Note: EmailJS doesn't handle file uploads in its free plan
      // For file handling, you'd need a paid plan or another service like FormSpree

      await sendEmail();

      // Success handling
      setSubmitStatus({
        success: true,
        message:
          "Your application has been submitted successfully! We will contact you soon.",
      });

      // Clear the form after successful submission
      handleCancel();
    } catch (error) {
      // Error handling
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
      comments: "",
    });
    // Clear file input
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
    
  ]
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
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
          <div>
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
          {/* Age */}
          <div>
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

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number <span className="text-red-600">*</span>
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


          {/* IT Background */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="it"
              name="it"
              checked={formData.it}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="it" className="ml-2 block text-sm text-gray-700">
              IT Background
            </label>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <div className="flex space-x-4 justify-center">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="male"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label
                  htmlFor="female"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
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
          <div>
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
          <div>
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
          <div>
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
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

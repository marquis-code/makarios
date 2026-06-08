import { c as createLucideIcon } from './createLucideIcon-toOOggq-.mjs';
import { ref } from 'vue';
import { a as useCustomToast, G as GATEWAY_ENDPOINT } from './server.mjs';

const Clock = createLucideIcon("clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
]);
const appointments_api = {
  create: (payload) => GATEWAY_ENDPOINT.post("/appointments", payload),
  getAll: () => GATEWAY_ENDPOINT.get("/appointments")
};
const useCreateAppointment = () => {
  const loading = ref(false);
  const success = ref(false);
  const { showToast } = useCustomToast();
  const appointment = ref({
    fullName: "",
    email: "",
    purpose: "",
    date: "",
    message: ""
  });
  const submitAppointment = async () => {
    if (!appointment.value.fullName || !appointment.value.email) {
      showToast({ title: "Validation", message: "Please fill in all required fields", toastType: "warning" });
      return null;
    }
    loading.value = true;
    try {
      const res = await appointments_api.create(appointment.value);
      success.value = true;
      showToast({ title: "Success", message: "Appointment booked successfully!", toastType: "success" });
      appointment.value = { fullName: "", email: "", purpose: "", date: "", message: "" };
      return res.data;
    } catch (err) {
      showToast({ title: "Error", message: err?.response?.data?.message || "Failed to book appointment", toastType: "error" });
      return null;
    } finally {
      loading.value = false;
    }
  };
  return { loading, success, appointment, submitAppointment };
};

export { Clock as C, useCreateAppointment as u };
//# sourceMappingURL=useCreateAppointment-DNfs5wb2.mjs.map

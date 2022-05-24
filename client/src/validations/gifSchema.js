import * as Yup from "yup";

const SUPPORTED_FORMATS = ["jpg", "jpeg", "gif", "png"];

export const initialValuesFileFull = {
  fileFull: "",
};

// export const filefullGifSchema = Yup.object().shape({
//   fileFull: Yup.mixed()
//     .test(
//       "format",
//       "Only the following formats are accepted: .jpeg, .jpg .gif .png",
//       (value) =>
//         value &&
//         SUPPORTED_FORMATS.includes(
//           value.substring(value.indexOf("."), value.length)
//         )
//     )
//     .required("The full file is required"),
// });

export const initialValuesFileUrl = {
  fileUrl: "",
};

export const fileUrlGifSchema = Yup.object().shape({
  fileUrl: Yup.string().required("The url file is required"),
});

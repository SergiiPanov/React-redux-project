import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { push } from "connected-react-router";
import { RoutePath } from "../../../../router/constants";
import * as Yup from "yup";

export default () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
    description: Yup.string()
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
    image_url: Yup.string()
      .min(3, "smallest then 3 symbol")
      .max(255, "biggest then 255 symbol")
      .required("write any word"),
  });
  return (
    <div>
      <Formik
        initialValues={{ title: ``, description: "", image_url: "" }}
        validationSchema={validationSchema}
        onSubmit={values => {
          dispatch(actions.A_addArticleRequest(values));
          dispatch(push(RoutePath.ARTICLES));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Input Title"
              />
              {touched.title && errors.title ? <div style={{ color: "red" }}>{errors.title}</div> : null}
            </p>

            <p>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Input Description"
              />
              {touched.description && errors.description ? (
                <div style={{ color: "red" }}>{errors.description}</div>
              ) : null}
            </p>
            <p>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image_url"
                id="image_url"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image_url}
                placeholder="Input IMG Url"
              />
              {touched.image_url && errors.image_url ? <div style={{ color: "red" }}>{errors.image_url}</div> : null}
            </p>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

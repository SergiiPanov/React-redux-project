import React from 'react';
import {Formik} from 'formik';
import {useDispatch} from "react-redux";
import * as actions from "../../store/actions"
import {push} from "connected-react-router"
import {v4 as uuidv4} from "uuid"
import {RoutePath} from "../../../../router/constants"
import * as Yap from "yup"


export default () => {
    const dispatch = useDispatch()
    const validationSchema = Yap.object().shape({
        title : Yap.string()
            .min(3, "smallest then 3 symbol")
            .max(255, "biggest then 255 symbol")
            .required("write any word"),
        description : Yap.string()
            .min(3, "smallest then 3 symbol")
            .max(255, "biggest then 255 symbol")
            .required("write any word"),
        image : Yap.string()
            .min(3, "smallest then 3 symbol")
            .max(255, "biggest then 255 symbol")
            .required("write any word"),
    })
    return (
        <div>
            <Formik initialValues={{id: uuidv4(), title: ``, description: "", image: ""}}
                    validationSchema={validationSchema}
                    onSubmit={(values => {
                        dispatch(actions.A_addArticleRequest(values))
                        dispatch(push(RoutePath.ARTICLES))
                    })}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (


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
                                style={ touched.title && errors.title ? {background:"red"}  : null}
                            />
                            {touched.title && errors.title ? <div style={{color:"red"}}>{errors.title}</div>: null}
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
                                style={ touched.description && errors.description? {background:"red"}  : null}
                            />
                            {touched.description&& errors.description? <div style={{color:"red"}}>{errors.description}</div>: null}
                        </p>
                        <p>
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                name="image"
                                id="image"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.image}
                                placeholder="Input IMG Url"
                                style={ touched.image && errors.image? {background:"red"}  : null}
                            />
                            {touched.image && errors.image ? <div style={{color:"red"}}>{errors.image}</div>: null}
                        </p>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>

    )
}





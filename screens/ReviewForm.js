import React from "react";

import { Button, TextInput, View, Text } from "react-native";
import FlatButton from "../shared/button";

import { Formik } from "formik";
import * as yup from "yup";

import { globalStyles } from "../styles/global";

// Validation Schema
const ReviewSchems = yup.object({
    title: yup
        .string()
        .required()
        .min(4),
    body: yup
        .string()
        .required()
        .min(8),
    // Custom test based validation
    rating: yup
        .string()
        .required()
        .test("is-num-1-5", "Rating must be a number 1-5", val => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
});

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: "",
                    body: "",
                    rating: ""
                }}
                validationSchema={ReviewSchems}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {formikProps => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange("title")}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.title &&
                                formikProps.errors.title}
                            {/*
                                Not so consistent error 
                                formikProps.errors.title
                            */}
                        </Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.body &&
                                formikProps.errors.body}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                            onBlur={formikProps.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.rating &&
                                formikProps.errors.rating}
                        </Text>
                        <FlatButton
                            text="Submit"
                            onPress={formikProps.handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}

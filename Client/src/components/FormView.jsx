import React, { useEffect, useState } from "react";
import { getFormById, submitForm } from "../api";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";

const FormView = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    getFormById(id).then((res) => {
      setForm(res.data.form);
    });
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    form.fields.forEach((field) => {
      const value = responses[field.label];
      if (field.required) {
        if (field.type === "text" && (!value || value.trim() === "")) {
          newErrors[field.label] = `${field.label} is required`;
        }
        if (field.type === "checkbox" && !value) {
          newErrors[field.label] = `${field.label} must be checked`;
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setResponses((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // clear error on change
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      await submitForm({ formId: id, responses });
      alert("Submitted!");
    } catch (err) {
      alert("Submission failed");
    }
  };

  if (!form) return <div>Loading...</div>;

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {form.title}
      </Typography>

      {form.fields.map((field, index) => (
        <Box key={index} mb={3}>
          {field.type === "text" ? (
            <>
              <TextField
                fullWidth
                label={field.label}
                variant="outlined"
                required={field.required}
                value={responses[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                error={Boolean(errors[field.label])}
                helperText={errors[field.label]}
              />
            </>
          ) : (
            <>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(responses[field.label])}
                    onChange={(e) =>
                      handleChange(field.label, e.target.checked)
                    }
                  />
                }
                label={field.label}
              />
              {errors[field.label] && (
                <FormHelperText error>{errors[field.label]}</FormHelperText>
              )}
            </>
          )}
        </Box>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        fullWidth
      >
        Submit
      </Button>
    </Container>
  );
};

export default FormView;

import React, { useState } from "react";
import { createForm } from "../api";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";

const FormBuilder = () => {
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([]);
  const navigate = useNavigate();

  const addField = (type) => {
    const label = prompt("Enter field label:");
    if (!label) return;

    const isRequired = window.confirm("Should this field be required?");
    setFields([...fields, { label, type, required: isRequired }]);
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("Form title is required.");
      return;
    }

    if (fields.length === 0) {
      alert("Please add at least one field.");
      return;
    }

    const confirm = window.confirm(
      "Are you sure you want to create this form?"
    );
    if (!confirm) return;

    await createForm({ title, fields });
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dynamic Form Builder
      </Typography>

      <TextField
        fullWidth
        label="Form Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{
          mb: 2,
        }}
      />

      <Box display="flex" gap={2} mb={2}>
        <Button variant="contained" onClick={() => addField("text")}>
          Add Text Field
        </Button>
        <Button variant="contained" onClick={() => addField("checkbox")}>
          Add Checkbox
        </Button>
      </Box>

      <List>
        {fields.map((field, i) => (
          <ListItem key={i}>
            <ListItemText primary={`${field.label} (${field.type})`} />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Save Form
      </Button>
    </Container>
  );
};

export default FormBuilder;

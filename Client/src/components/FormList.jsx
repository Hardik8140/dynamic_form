import React, { useEffect, useState } from "react";
import { getForms } from "../api";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteForm } from "../api";

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    getForms().then((res) => setForms(res.data));
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Form List
      </Typography>
      <Button component={Link} to="/create" variant="contained" sx={{ mb: 2 }}>
        Create New Form
      </Button>
      <List>
        {forms.map((form) => (
          <ListItem
            key={form._id}
            secondaryAction={
              <>
                <Button
                  component={Link}
                  to={`/form/${form._id}`}
                  variant="outlined"
                  sx={{ mr: 1 }}
                >
                  View
                </Button>
                <IconButton
                  onClick={async () => {
                    const confirm = window.confirm(
                      "Are you sure you want to delete this form?"
                    );
                    if (confirm) {
                      await deleteForm(form?._id);
                      setForms(forms.filter((f) => f._id !== form._id));
                    }
                  }}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={form.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FormList;

import { Formik, Form } from "formik";
import * as Yup from "yup";
//import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@mui/material";
import Header from "./components/Header";
import Button from "./components/Forms/Button";
import Textfield from "./components/Forms/Textfield";
import Select from "./components/Forms/Select";
import { DropzoneAreaBase } from "material-ui-dropzone";
const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));
const categories = { Fashion: "Fashion", Electronics: "Electronics" };
const INITIAL_FORM_STATE = {
  name: "",
  description: "",
  categories: "",
  stock: "",
  tags: "",
  regularPrice: "",
  salePrice: "",
};
const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required("Required"),
  categories: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  stock: Yup.number().integer().required("Required"),
  tags: Yup.string().required("Required"),
  regularPrice: Yup.number()
    .integer()
    .min(0, "Number must be between 0 and 10000000")
    .max(10000000, "Number must be between 1 and 10000000")
    .required("Required"),
  salePrice: Yup.number()
    .integer()
    .min(0, "Number must be between 0 and 10000000")
    .max(10000000, "Number must be between 1 and 10000000")
    .required("Required"),
});
function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4">Add Product</Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Select
                      name="categories"
                      label="Select Category"
                      options={categories}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="description"
                      label="Description"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DropzoneAreaBase
                      acceptedFiles={["image/*"]}
                      dropzoneText={"Drag and drop prduct image here or click"}
                      onChange={(files) => console.log("Files:", files)}
                      onAlert={(message, variant) =>
                        console.log(`${variant}: ${message}`)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Textfield name="stock" label="Stock" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="tags" label="Tags" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="regularPrice" label="Regular Price" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Textfield name="salePrice" label="Sale Price" />
                  </Grid>

                  <Grid item>
                    <Button>Save Product</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;

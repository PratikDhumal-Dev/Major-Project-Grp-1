import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../components/UI/CommonSection";
import "../styles/login.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Popup from "../components/UI/Popup";
import CategoriesButton from "./../components/UI/CategoriesButton";
import CategoriesSection from "./../components/UI/CategoriesSection";
function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      setLoading(false);
      toast.success("Account created");
    } catch (err) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const categories = ["Animation", "Graphic Design", "VFX", "Painting"];

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold mb-4">Signup</h3>
              <Form className="auth__form" onSubmit={signup}>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <CategoriesSection>
                  <button
                    type="submit"
                    className="shop__btn auth__btn mb-3"
                  ></button>
                </CategoriesSection>

                <p style={{ marginTop: "20px" }}>
                  {" "}
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Signup;

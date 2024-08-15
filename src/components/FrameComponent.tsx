import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  firstName?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  firstName,
}) => {
  return (
    <div className={[styles.firstNameParent, className].join(" ")}>
      <div className={styles.firstName}>{firstName}</div>
      <Form className={styles.placeholders}>
        <Form.Control type="text" />
      </Form>
    </div>
  );
};

export default FrameComponent;

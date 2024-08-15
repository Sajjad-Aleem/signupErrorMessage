import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";
import styles from "./SignupErrorMessage.module.css";

const SignupErrorMessage: FunctionComponent = () => {
  return (
    <div className={styles.signupErrorMessage}>
      <div className={styles.main}>
        <div className={styles.content}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
          />
        </div>
        <h1 className={styles.useTechleadCrm}>
          “ Use TECHLEAD CRM to manage and collaborate in a smoother and more
          efficient way. ”
        </h1>
      </div>
      <div className={styles.loginFormContainerWrapper}>
        <div className={styles.loginFormContainer}>
          <div className={styles.loginForm}>
            <img
              className={styles.loginlogo1Icon}
              loading="lazy"
              alt=""
              src="/loginlogo-1@2x.png"
            />
            <div className={styles.brandName}>
              <h3 className={styles.techleadCrm}>TechLead CRM</h3>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.welcomeMessageParent}>
              <div className={styles.welcomeMessage}>
                <h1 className={styles.welcomeToTechlead}>
                  Welcome to TechLead CRM
                </h1>
                <div className={styles.signUpTo}>
                  Sign up to your TechLead CRM account and use it for your
                  program management
                </div>
              </div>
              <form className={styles.inputFields}>
                <div className={styles.inputWrapper}>
                  <div className={styles.inputLabels}>
                    <FrameComponent firstName="First Name" />
                    <FrameComponent firstName="Last Name" />
                    <div className={styles.inputWrapper}>
                      <div className={styles.welcomeMessage}>
                        <div className={styles.email}>
                          <span className={styles.email1}>Email</span>
                          <span className={styles.span}>*</span>
                        </div>
                        <input
                          className={styles.emailPlaceholder}
                          type="text"
                        />
                      </div>
                      <div className={styles.supportingText}>
                        <div className={styles.supportingText1}>
                          Your enter a wrong email please check your email
                        </div>
                      </div>
                    </div>
                    <div className={styles.passwordParent}>
                      <div className={styles.email}>
                        <span className={styles.email1}>Password</span>
                        <span className={styles.span}>*</span>
                      </div>
                      <DropdownButton
                        className={styles.frameChild}
                        as={ButtonGroup}
                        style={{
                          width: "510",
                          height: "44",
                          borderRadius: "5px",
                        }}
                      >{` `}</DropdownButton>
                    </div>
                    <div className={styles.passwordParent}>
                      <div className={styles.email}>
                        <span className={styles.email1}>Confirm Password</span>
                        <span className={styles.span}>*</span>
                      </div>
                      <input className={styles.frameItem} type="text" />
                    </div>
                  </div>
                </div>
                <button className={styles.signInButton}>
                  <div className={styles.signIn}>Sign in</div>
                </button>
              </form>
            </div>
            <div className={styles.didntHaveAnContainer}>
              <span>{`Didn’t have an account? `}</span>
              <span className={styles.signIn1}>Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupErrorMessage;

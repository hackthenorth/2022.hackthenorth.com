import React, { useState, useMemo, useCallback, FormEvent } from "react";
import { Button } from "src/components/base";
import Spinner from "src/components/Spinner";
import { TWText, TWShared } from "src/styles";
import { useDeviceSize } from "src/utils";
import { mediaQueries } from "src/utils/responsive";
import styled from "styled-components";
import tw, { theme } from "twin.macro";

import {
  validateEmailAddress,
  getResultMessage,
  signupRequest,
  SignUpState,
} from "./utils";

interface MailingListSignupProps
  extends React.ComponentPropsWithoutRef<"form"> {
  placeholder: string;
  mobilePlaceholder?: string;
}

interface CheckErrorsProps {
  hasErrors: boolean;
}

const MailingListSignup: React.FC<MailingListSignupProps> = ({
  mobilePlaceholder,
  placeholder,
  children,
  ...rest
}) => {
  const [email, setEmail] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [signUpState, updateSignUpState] = useState(SignUpState.INITIAL);
  const isLargeMobileOrSmaller = useDeviceSize("largeMobile");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (email === "") {
        updateSignUpState(SignUpState.EMPTY);
        setHasErrors(true);
        return;
      }

      if (validateEmailAddress(email)) {
        updateSignUpState(SignUpState.SUBMITTING);
        signupRequest(email)
          .then(({ alreadySignup }) => {
            if (alreadySignup) {
              updateSignUpState(SignUpState.DUPLICATE);
              setHasErrors(true);
            } else {
              updateSignUpState(SignUpState.SUBMITTED);
            }
          })
          .catch(() => updateSignUpState(SignUpState.ERROR));
      } else {
        updateSignUpState(SignUpState.INVALID);
        setHasErrors(true);
      }
    },
    [email]
  );

  const refinedPlaceholder =
    mobilePlaceholder && isLargeMobileOrSmaller
      ? mobilePlaceholder
      : placeholder;

  const resultMessage = useMemo(
    () => getResultMessage(signUpState),
    [signUpState]
  );

  return (
    <form
      tw="flex w-full"
      onSubmit={onSubmit}
      onBlur={() => updateSignUpState(SignUpState.INITIAL)}
      {...rest}
    >
      <InputWrapper>
        <div tw="flex w-full">
          <StyledInput
            tw="w-full pr-160 h-56"
            value={email}
            hasErrors={hasErrors}
            onChange={(e: any) => {
              setEmail(e.target.value);
              setHasErrors(false);
            }}
            placeholder={refinedPlaceholder}
            aria-label="Signup for Hack The North's mailing list"
            aria-required
          />

          <StyledButton
            tw="flex w-112 h-44 justify-center border-solid border-primary-blue1"
            variant="primary"
            isSubmitted={signUpState === SignUpState.SUBMITTED}
            disabled={signUpState === SignUpState.SUBMITTING || hasErrors}
            onClick={(e: any) => {
              if (
                signUpState !== SignUpState.SUBMITTED &&
                signUpState !== SignUpState.SUBMITTING
              )
                onSubmit(e);
            }}
            aria-label="Submit email"
          >
            {signUpState === SignUpState.SUBMITTED ? (
              <p>Submit</p>
            ) : signUpState === SignUpState.SUBMITTING ? (
              <Spinner color="white" size={isLargeMobileOrSmaller ? 18 : 24} />
            ) : (
              children
            )}
          </StyledButton>
        </div>
        {(hasErrors || signUpState === SignUpState.SUBMITTED) && (
          <ResultText tw="flex mt-8 ml-20 tb:(ml-16)" hasErrors={hasErrors}>
            {resultMessage}
          </ResultText>
        )}
      </InputWrapper>
    </form>
  );
};

const StyledInput = styled.input<CheckErrorsProps>`
  ${tw`py-12 px-16 rounded-100 outline-none bg-background-elevation`}
  ${TWText.body}
  ${TWShared.focus}
  ${TWShared.disabled}
  ::placeholder {
    color: ${theme`colors[medium-emphasis]`};
  }
  border: 1px solid
    ${({ hasErrors }) =>
      hasErrors
        ? theme`colors.states.error`
        : theme`colors.background.elevation`};
  ${mediaQueries.tablet} {
    padding: 12px 16px;
  }
  ${mediaQueries.smallMobile} {
    padding: 8px 16px;
  }
`;

const InputWrapper = styled.div`
  ${tw`flex flex-col relative`}
  width: 50%;
  ${mediaQueries.medium} {
    width: 60%;
  }
  ${mediaQueries.tablet} {
    width: 80%;
  }
  ${mediaQueries.largeMobile} {
    width: 100%;
  }
`;

const StyledButton = styled(Button)<{ isSubmitted: boolean }>`
  ${TWShared.disabled}
  ${TWShared.hover}
  background: "linear-gradient(to right, #037ff3 0%, #43afde 100%)";
  margin: auto;
  margin-left: -118px;

  /* Align the spinner in the center */
  > div {
    margin: auto;
  }
`;

const ResultText = styled.span<CheckErrorsProps>`
  ${TWText.body}
  color: ${({ hasErrors }) =>
    hasErrors ? theme`colors.states.error` : theme`colors.states.success`};
`;

export default MailingListSignup;

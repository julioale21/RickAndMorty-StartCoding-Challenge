import React from "react";
import { Page, PageButton, PaginatorContainer } from "./Paginator.styled";

interface Props {
  page?: number;
  next?: number;
  prev?: number;
  handlePrev?: () => void;
  handleNext?: () => void;
}

const Paginator: React.FC<Props> = ({ page, next, prev, handleNext, handlePrev }) => {
  return (
    <PaginatorContainer>
      {prev > 0 ? <PageButton onClick={handlePrev}>Prev</PageButton> : null}
      <Page>
        <p>{page}</p>
      </Page>
      {next > page ? <PageButton onClick={handleNext}>Next</PageButton> : null}
    </PaginatorContainer>
  );
};

Paginator.defaultProps = {
  page: 1,
  next: 0,
  prev: 0,
  handlePrev: () => {},
  handleNext: () => {},
};

export default Paginator;

import React from "react";
import { usePagination } from "./CustomHooks/usePagination";
import fakeData from "./data/fake-data.json";

export const App = () => {
  let i = 1;

  const paginate = usePagination(fakeData, 3);
  let current_data = paginate.currentData();

  const handlePrev = () => {
    paginate.prev();
  };

  const handleNext = () => {
    paginate.next();
  };

  return (
    <div className="card container mt-4 shadow-lg">
      <div className="my-3">
        <h4>Custom Hook usePagination</h4>
      </div>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">userId</th>
              <th scope="col">title</th>
              <th scope="col">completed</th>
            </tr>
          </thead>
          <tbody>
            {current_data.map((option) => (
              <tr key={option.id}>
                <th scope="row">{i++}</th>
                <td>{option.userId}</td>
                <td>{option.title}</td>
                <td>{option.completed === true ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto my-3">
        <nav>
          <ul className="pagination">
            <li className="page-item ">
              <a
                className="page-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                onClick={handlePrev}
              >
                Previous
              </a>
            </li>
            {paginate.pages.map((option) => (
              <li
                className={
                  option === paginate.currentPage
                    ? "page-item active"
                    : "page-item "
                }
              >
                <a className="page-link" href="#">
                  {option}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#" onClick={handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

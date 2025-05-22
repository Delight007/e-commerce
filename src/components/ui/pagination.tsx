import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

export default function PaginationButtons({
  page,
  setPage,
  totalProductPerPage,
}: {
  page: number;
  setPage: (page: number) => void;
  totalProductPerPage: number;
}) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const totalPages = 6; // Assuming this is the total number of pages you want to display

  return (
    <Stack spacing={2} className="mt-4 flex justify-center">
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            margin: "0 6px", // Add horizontal margin to each button
            width: "40px", // Set a fixed width for each button
            height: "32px", // Set a fixed height for each button
            fontSize: "12px",
            borderRadius: "0",
          },
          "& .MuiPagination-ul": {
            gap: "0", // Add gap between buttons
          },
        }}
        renderItem={(item) => {
          // Show only relevant pages based on current page
          if (item.type === "page" && typeof item.page === "number") {
            // When on first 3 pages, show 1-3
            if (page <= 3 && item.page > 3) return null;
            // When on last 3 pages, show 4-6
            if (page > 3 && item.page <= 3) return null;
          }
          // hide the "..." ellipsis indicators too
          // if (item.type === "start-ellipsis" || item.type === "end-ellipsis") {
          //   return null;
          // }
          // otherwise render as normal (first, prev, pages 1–3, next, last)
          return <PaginationItem {...item} />;
        }}
      />
    </Stack>
  );
}

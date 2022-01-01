import React from "react";

interface ICartIcon {}

export const CartIcon = ({}: ICartIcon) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="18.5" height="19.5">
        <path
          d="M 2.48 11.763 L 3.209 11.585 Z M 2.48 6.464 L 1.751 6.286 Z M 17.432 6.464 L 18.16 6.286 L 18.16 6.286 Z M 17.432 11.763 L 18.16 11.941 Z M 12.495 16.347 L 12.33 15.615 Z M 7.417 16.347 L 7.252 17.079 L 7.252 17.079 Z M 7.417 1.88 L 7.582 2.612 Z M 12.495 1.88 L 12.66 1.148 L 12.66 1.148 Z M 6.97 16.246 L 7.134 15.514 L 7.134 15.514 Z M 12.942 16.246 L 13.107 16.978 L 13.107 16.978 Z M 12.942 1.981 L 12.777 2.712 L 12.777 2.712 Z M 6.97 1.981 L 6.805 1.249 Z M 3.323 3.361 L 2.586 3.496 Z M 2.72 4.23 C 2.794 4.638 3.185 4.908 3.593 4.833 C 4 4.759 4.27 4.368 4.195 3.96 Z M 0.882 0.012 C 0.474 -0.061 0.085 0.211 0.012 0.618 C -0.061 1.026 0.211 1.416 0.618 1.488 Z M 6.421 16.583 C 6.496 16.744 6.525 16.925 6.504 17.105 L 7.993 17.283 C 8.047 16.828 7.974 16.366 7.781 15.951 Z M 6.504 17.105 C 6.482 17.284 6.412 17.451 6.303 17.586 L 7.472 18.526 C 7.759 18.169 7.939 17.738 7.993 17.283 Z M 6.303 17.586 C 6.194 17.721 6.053 17.819 5.897 17.87 L 6.367 19.294 C 6.802 19.151 7.185 18.883 7.472 18.526 Z M 5.897 17.87 C 5.741 17.921 5.575 17.926 5.417 17.883 L 5.023 19.33 C 5.465 19.45 5.932 19.438 6.367 19.294 Z M 5.417 17.883 C 5.259 17.84 5.114 17.75 4.999 17.622 L 3.88 18.62 C 4.184 18.962 4.581 19.209 5.023 19.33 Z M 4.999 17.622 C 4.884 17.493 4.805 17.33 4.775 17.153 L 3.296 17.405 C 3.373 17.856 3.575 18.278 3.88 18.62 Z M 4.775 17.153 C 4.745 16.975 4.765 16.792 4.832 16.627 L 3.442 16.063 C 3.27 16.488 3.22 16.953 3.296 17.405 Z M 4.832 16.627 C 4.899 16.462 5.009 16.323 5.146 16.225 L 4.274 15.005 C 3.902 15.271 3.614 15.639 3.442 16.063 Z M 14.678 16.368 C 14.807 16.481 14.904 16.631 14.954 16.804 L 16.393 16.38 C 16.263 15.939 16.012 15.543 15.667 15.24 Z M 14.954 16.804 C 15.005 16.976 15.007 17.161 14.959 17.335 L 16.405 17.733 C 16.527 17.29 16.523 16.821 16.393 16.38 Z M 14.959 17.335 C 14.911 17.508 14.817 17.661 14.69 17.776 L 15.7 18.886 C 16.04 18.576 16.283 18.176 16.405 17.733 Z M 14.69 17.776 C 14.564 17.891 14.411 17.964 14.249 17.99 L 14.485 19.471 C 14.938 19.399 15.36 19.195 15.7 18.886 Z M 14.249 17.99 C 14.088 18.015 13.923 17.993 13.772 17.924 L 13.149 19.288 C 13.567 19.48 14.031 19.543 14.485 19.471 Z M 13.772 17.924 C 13.621 17.855 13.489 17.741 13.394 17.593 L 12.131 18.401 C 12.378 18.789 12.731 19.098 13.149 19.288 Z M 13.394 17.593 C 13.299 17.445 13.247 17.27 13.245 17.088 L 11.745 17.105 C 11.75 17.565 11.883 18.015 12.131 18.401 Z M 13.245 17.088 C 13.243 16.907 13.291 16.73 13.383 16.58 L 12.101 15.801 C 11.863 16.193 11.74 16.646 11.745 17.105 Z M 7.134 2.712 L 7.582 2.612 L 7.252 1.148 L 6.805 1.249 Z M 12.33 2.612 L 12.777 2.712 L 13.107 1.249 L 12.66 1.148 Z M 12.777 15.514 L 12.33 15.615 L 12.66 17.079 L 13.107 16.978 Z M 7.582 15.615 L 7.134 15.514 L 6.805 16.978 L 7.252 17.079 Z M 3.209 11.585 C 2.812 9.963 2.812 8.264 3.209 6.642 L 1.751 6.286 C 1.298 8.142 1.298 10.085 1.751 11.941 Z M 16.703 6.642 C 17.099 8.264 17.099 9.963 16.703 11.585 L 18.16 11.941 C 18.613 10.085 18.613 8.142 18.16 6.286 Z M 12.33 15.615 C 10.766 15.968 9.146 15.968 7.582 15.615 L 7.252 17.079 C 9.033 17.48 10.878 17.48 12.66 17.079 Z M 7.582 2.612 C 9.146 2.259 10.766 2.259 12.33 2.612 L 12.66 1.148 C 10.878 0.747 9.033 0.747 7.252 1.148 Z M 7.134 15.514 C 5.22 15.083 3.693 13.568 3.209 11.585 L 1.751 11.941 C 2.366 14.459 4.316 16.417 6.805 16.978 Z M 13.107 16.978 C 15.595 16.417 17.546 14.459 18.16 11.941 L 16.703 11.585 C 16.219 13.568 14.692 15.083 12.777 15.514 Z M 12.777 2.712 C 14.692 3.144 16.219 4.659 16.703 6.642 L 18.16 6.286 C 17.546 3.768 15.595 1.81 13.107 1.249 Z M 6.805 1.249 C 4.316 1.81 2.366 3.768 1.751 6.286 L 3.209 6.642 C 3.693 4.659 5.22 3.144 7.134 2.712 Z M 2.916 13.209 L 16.995 13.209 L 16.995 11.709 L 2.916 11.709 Z M 2.586 3.496 L 2.72 4.23 L 4.195 3.96 L 4.061 3.226 Z M 0.618 1.488 C 1.602 1.664 2.395 2.455 2.586 3.496 L 4.061 3.226 C 3.762 1.592 2.504 0.301 0.882 0.012 Z"
          fill="rgb(54,56,83)"
        ></path>
      </svg>
    </>
  );
};

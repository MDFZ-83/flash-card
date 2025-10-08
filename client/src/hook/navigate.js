import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";



export const useCardNavigation = () => {
  const navigate = useNavigate();
  const goToCard = (id) => {
    navigate(`/card/${id}`);
  };
  const goToEdit = () => {
    navigate(`/set`);
  };
  return { goToCard , goToEdit};
};

import { useNavigate, useLocation } from 'react-router';

export function useRouter () {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname

  function navigateTo(path) {
    navigate(path);
  }

  return {
    currentPath,
    navigateTo
  };
}
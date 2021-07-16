import { STATUSES } from '@constants';

const getThemeForSquad = (status: string) => {
  const { TEST_COMPLETED } = STATUSES;

  switch (status) {
    case TEST_COMPLETED.SUCCESS:
      return 'success';
    case TEST_COMPLETED.FAILED:
      return 'danger';
    case TEST_COMPLETED.CHECKING_RESULT:
      return 'default';
    default:
      return 'default';
  }
};

export default getThemeForSquad;

import { useMutation } from 'react-query';

import { useUser } from '~/hooks/common/useUser';
import { del } from '~/libs/api/client';
import { useToast } from '~/store/Toast';

export default function useMemberSiginOutMutation() {
  const { fireToast } = useToast();
  const { userLogout } = useUser();

  return useMutation(() => del(`/v1/members/remove`), {
    onSuccess: () => {
      fireToast({ content: '계정이 삭제되었습니다!' });

      userLogout();
    },
    onError: (error, variable, context) => {
      console.log('err', error, variable, context);
    },
  });
}

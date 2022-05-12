import { css, Theme } from '@emotion/react';

import PortalWrapper from '~/components/common/PortalWrapper';
import usePreventScroll from '~/hooks/common/usePreventScroll';
import useQueryParam from '~/hooks/common/useRouterQuery';
import TagPage from '~/pages/tag';

export default function TagFormRouteAsModal() {
  const query = useQueryParam('modal', String);

  usePreventScroll(Boolean(query));

  return (
    <PortalWrapper isShowing={Boolean(query)}>
      <div css={wrapperCss}>
        <TagPage />
      </div>
    </PortalWrapper>
  );
}

const wrapperCss = (theme: Theme) => css`
  position: fixed;
  top: 0;
  /* 가로 가운데 정렬 */
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: ${theme.size.maxWidth};
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${theme.color.background};
  padding: ${theme.size.layoutPadding};
  z-index: 1000;
`;

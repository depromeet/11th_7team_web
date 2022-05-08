import { ComponentProps } from 'react';
import { css, Theme, useTheme } from '@emotion/react';

import { useUserAgent } from '~/hooks/common/useUserAgent';

import { CTAButton } from './CTAButton';

interface CTABottomButtonProps extends ComponentProps<typeof CTAButton> {
  /**
   * css bottom 속성입니다.
   *
   * @default 0
   */
  bottom?: string;
}

/**
 * {@link CTAButton}을 확장하여, absoulte bottom을 갖는 컴포넌트입니다.
 *
 * @example ```tsx
 * <CTABottomButton>기본 버튼</CTABottomButton>
 * <CTABottomButton bottom="12px">bottom 12px 버튼</CTABottomButton>
 * ```
 */
export function CTABottomButton(props: CTABottomButtonProps) {
  const { isIos } = useUserAgent();
  const theme = useTheme();
  const { children, bottom = '0', ...rest } = props;

  return (
    <div css={ctaBottomButtonCss({ theme, isIos: isIos(), bottom })}>
      <CTAButton {...rest}>{children}</CTAButton>
    </div>
  );
}

const ctaBottomButtonCss = ({
  isIos,
  theme,
  bottom,
}: {
  isIos: boolean;
  theme: Theme;
  bottom: string;
}) => css`
  position: absolute;
  left: 0;
  bottom: ${bottom};
  padding: ${isIos ? `8px 16px 0 16px` : `8px 16px`};
  background: ${theme.color.background};
  width: 100%;
`;

export interface ApiHelperDefaultItems {
  accessToken?: string;
}

export type ApiHelper<T = unknown, R = unknown> = (
  props: ApiHelperDefaultItems & T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<R>;
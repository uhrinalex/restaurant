import { Context } from './context';

export interface IContextService {
  setContext(context: Context);
  getContext(): Promise<Context>;
}

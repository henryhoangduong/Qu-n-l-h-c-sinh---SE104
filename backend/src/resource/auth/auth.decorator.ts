import { ExecutionContext, SetMetadata, createParamDecorator } from "@nestjs/common";

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const TokenDecorator = createParamDecorator(
    (data: string, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.split(' ')[1];
        return token;
    },
);
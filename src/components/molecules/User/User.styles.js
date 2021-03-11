import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.grey} ;

    }
`;


export const StyledAvarege = styled.div`
    width: 40px;
    height: 40px;
    background-color:  ${({ theme, average }) => {
        if (average > 4) return theme.colors.success;
        if (average > 3) return theme.colors.warning;
        if (average > 2) return theme.colors.error;
        return theme.colors.grey;
    }};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: bold;
   

`;

export const StyledUserInfo = styled.div`
   
`;

export const StyledUserName = styled.p`
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 15px;
    margin-top: 24px;
`;

export const StyledAttendenceInfo = styled.p`
      font-size: ${({ theme }) => theme.fontSize.m};
      margin-top: -10px;
`;
/* Мануал */
// Как работает, если задать настройки например, так:
/*
export const options = {
  colInit: 5,
  widthBlocks: ['20%', '20%', '20%', '20%', '20%'],
};

export const breakpoints = {
  1700: {
    col: 4,
    widthBlocks: ['25%', '25%', '25%', '25%'],
  },
  1324: {
    col: 3,
    widthBlocks: ['33%', '33%', '33%'],
  },
  501: {
    col: 2,
    widthBlocks: ['50%', '50%'],
  },
};
*/
// Формирование css происходит сверху вниз по диапазону
// диапазон рассчитывается от options вниз, т.е.
// от 1700 до 1324, работает стиль из блока 1700 и т.д.
// нельзя задать breakpoints ниже 500, так как включается режим телефона
// если мы выходим за верхнюю границу диапазона breakpoints, то включается стиль из options
/* End Мануал */
// порядок задания breakpoints не имеет значения, он автоматом сортируется от меньшего к большему
// автоматически обнуляется отступ у крайнего элемента в строке
import styled, { css } from 'styled-components';
import isEmpty from 'lodash.isempty';
import BoxBlock from "../../modules/BoxBlock";
import { RESOLUTION, SORTING, INDENTS } from "../../constants";
import { AlignTop, Wrap, JSBetween, HideBlock } from "../../globalStyled";
import { isArrayCount, sorting, arrayMaxField } from "../../utils";
function clearRightStyle() {
    return `
    //margin-right: 0 !important;
  `;
}
function indent() {
    return `
    margin-bottom: 24px;
    margin-right: ${INDENTS.default};
  `;
}
function twoColStyle(widthBlocks) {
    let styles = '';
    styles += `& > *:nth-child(odd) {
      flex: 0 0 ${widthBlocks[0]};
      ${indent()}
    }
  `;
    styles += `& > *:nth-child(even) {
      flex: 0 0 ${widthBlocks[1]};
      ${clearRightStyle()}
    }
  `;
    return styles;
}
function clearRight(col) {
    return `& > *:nth-child(${col}n + ${col}) {
      ${clearRightStyle()}
    }
  `;
}
function defaultWrapper(options, breakpoints, indents) {
    let styles = '';
    const { widthBlocks, hidden, stretch } = options;
    const { mobile, desktop } = hidden || {};
    const { out: stretchOut } = stretch || {};
    const col = isArrayCount(widthBlocks);
    const breakD = !isEmpty(breakpoints) ? arrayMaxField(Object.keys(breakpoints)) : 0;
    function widthBlocksStyle(widthBlocks) {
        let styles = '';
        widthBlocks.forEach((item, i) => {
            styles += `& > *:nth-child(${col}n + ${i + 1}) {
          flex: ${item.indexOf('%') > -1 && stretchOut ? `1 1 ${item}` : `0 0 ${item}`};
          ${indents ? indent() : ''}
        }
        
        ${clearRight(col)}
      `;
        });
        return styles;
    }
    function towOrAll(col) {
        return col === 2 ? twoColStyle(widthBlocks) : widthBlocksStyle(widthBlocks);
    }
    if (col) {
        if (breakD) {
            styles = `@media (min-width: ${breakD}px) {
          ${towOrAll(col)}
        }
      `;
        }
        else {
            return towOrAll(col);
        }
        styles += `@media (max-width: ${RESOLUTION.mobile.phone}) {
      ${Wrap}
  
      & > * {
        flex: 0 0 100% !important;
        width: 100% !important;
        
        ${clearRightStyle()}
        
        padding-left: 0 !important;
        margin-left: 0 !important;
        margin-bottom: 24px;
      }
    };
    `;
    }
    if (mobile) {
        styles += `@media (max-width: ${RESOLUTION.mobile.default}) {
        ${HideBlock}
      };
    `;
    }
    else if (desktop) {
        styles += `@media (min-width: ${RESOLUTION.mobile.default}) {
        ${HideBlock}
      };
    `;
    }
    return css `
    ${styles}
  `;
}
function breakpointsWidth(widthBlocks, indents) {
    let styles = '';
    const col = isArrayCount(widthBlocks);
    if (col) {
        if (col === 2) {
            styles += twoColStyle(widthBlocks);
        }
        else {
            widthBlocks.forEach((item, i) => {
                styles += `& > *:nth-child(${col}n + ${i + 1}) {
          flex: 0 0 ${item};
          margin-bottom: 24px;
          ${indents ? indent() : ''}
        }
        
        ${clearRight(col)}
      `;
            });
        }
    }
    return css `
    ${styles}
  `;
}
function breakpointsWrapper(breakpoints, indents) {
    let styles = '';
    if (!isEmpty(breakpoints)) {
        const keys = sorting({
            array: Object.keys(breakpoints),
            type: SORTING.number,
        });
        keys.forEach((key, i) => {
            const { col, widthBlocks, hidden } = breakpoints[Number(key)];
            const prevBP = keys[i - 1];
            const minD = `@media (min-width: ${prevBP}px) and (max-width: ${key}px)`;
            const maxW = `@media (max-width: ${key}px)`;
            if (col > 1) {
                if (prevBP) {
                    // Обсуживается стандартный кейс, когда нужна обычная сетка
                    if (isArrayCount(widthBlocks) === col) {
                        styles += `${minD} {
              ${Wrap}
            
              ${breakpointsWidth(widthBlocks || [], indents)}
            }
          `;
                    }
                    else {
                        // Обсуживается кейс, когда нужно авто определение сетки
                        styles += `${minD} {
              ${Wrap}
            
              & > * {
                flex: 0 0 ${100 / col}% !important;
              }
            }
          `;
                    }
                }
                else {
                    if (isArrayCount(widthBlocks) === col) {
                        styles += `${maxW} {
              ${Wrap}
            
              ${breakpointsWidth(widthBlocks || [], indents)}
            }
          `;
                    }
                    else {
                        styles += `${maxW} {
              ${Wrap}
            
              & > * {
                flex: 0 0 ${100 / col}% !important;
              }
            }
          `;
                    }
                }
            }
            else {
                styles += `${maxW} {
          ${Wrap}
        
          & > * {
            flex: 0 0 100% !important;
          }
        }
      `;
            }
            if (hidden) {
                if (prevBP) {
                    styles += `${minD} {
              ${HideBlock}
            }
          `;
                }
                else if (col === 1) {
                    styles += `${maxW} {
            ${HideBlock}
          }
          `;
                }
                else {
                    styles += `@media (min-width: ${key}px) {
              ${HideBlock}
            }
          `;
                }
            }
        });
    }
    return css `
    ${styles}
  `;
}
export const DefaultWrapperDiv = styled(BoxBlock) `
  ${AlignTop}
  ${Wrap}
  width: 100%;
  flex: 0 0 100% !important;
  margin-right: 0 !important;
  margin-bottom: 0 !important;

  &.assessment-adaptive-wrapper > * {
    margin-bottom: 24px !important;
  }

  ${({ options, breakpoints, indents }) => defaultWrapper(options, breakpoints, indents)}

  ${({ breakpoints, indents }) => breakpointsWrapper(breakpoints, indents)}
`;
export const SpaceBetweenWrapperDiv = styled(DefaultWrapperDiv) `
  ${JSBetween}
  ${Wrap}
`;

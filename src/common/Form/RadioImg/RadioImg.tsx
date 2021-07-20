import React from 'react';

import PhotoListRadio from './PhotoListRadio/PhotoListRadio';

import { FONT_VARIANTS } from '@globalStyled';

import { isUndefined, getRandomString } from '@utils';

import { renderMark } from '@common/Form/Radio/Radio';
import { Radio } from '@common/Form/Radio';

import {
  RadioText,
  RadioWrapperDiv,
  RadioWrapperInnerDiv,
  RadioTextBlockDiv,
} from '@common/Form/Radio/styled';

const { body1Regular } = FONT_VARIANTS;

export default class RadioImg extends Radio {
  $inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  onClick() {
    if (this.$inputRef) {
      this.$inputRef?.current?.click();
    }
  }

  render() {
    const {
      props: { name, value, label, checked, withContext, img },
      context: { fields },
    } = this;

    let formValueImg = '';
    let error = '';

    if (withContext) {
      formValueImg = !fields[name] ? '' : fields[name].value;
      error = !fields[name] ? '' : fields[name]?.validation?.errorMessage;
    }

    const checkedInit = isUndefined(checked) ? formValueImg === value : checked;

    return (
      <RadioWrapperDiv>
        <RadioWrapperInnerDiv>
          {renderMark({
            error,
            checked: checkedInit,
            onClick: () => {
              this.onClick();
            },
          })}

          <input
            type="radio"
            name={name}
            value={value || ''}
            checked={checkedInit}
            onChange={({ currentTarget }: { currentTarget: { value: string } }) => {
              this.onChange({ value: currentTarget.value });
            }}
            ref={this.$inputRef}
          />

          <RadioTextBlockDiv>
            {label && (
              <RadioText forwardedAs="div" variant={body1Regular}>
                <span
                  onClick={() => {
                    this.onClick();
                  }}
                >
                  {label}
                </span>
              </RadioText>
            )}

            {img && (
              <PhotoListRadio
                photos={[
                  {
                    link: img,
                    id: getRandomString(),
                    createTime: '',
                    name: '',
                  },
                ]}
                checked={checkedInit}
                onClick={() => {
                  this.onClick();
                }}
              />
            )}
          </RadioTextBlockDiv>
        </RadioWrapperInnerDiv>
      </RadioWrapperDiv>
    );
  }
}

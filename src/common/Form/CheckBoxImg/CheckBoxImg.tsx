import React from 'react';

import { FORM } from '@constants';
const { FORM_DISABLED_STATE } = FORM;

import { getRandomString, isUndefined } from '@utils';

import { renderMark } from '@common/Form/CheckBox/CheckBox';
import { CheckBox } from '@common/Form/CheckBox';

import {
  CheckboxWrapperDiv,
  CheckboxWrapperInnerDiv,
  CheckboxText,
  CheckboxInfoText,
  CheckboxTextBlockDiv,
} from '@common/Form/CheckBox/styled';

import PhotoListRadio from '@common/Form/RadioImg/PhotoListRadio/PhotoListRadio';

export default class CheckBoxImg extends CheckBox {
  $inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    const {
      props: { name, disabled, label, text, id, checked: Checked, withContext, img },
      context: { fields, disabled: formDisable },
    } = this;

    let checkedImg = false;
    let error = '';

    if (withContext) {
      checkedImg = !fields[name] ? false : !!fields[name].value;
      error = !fields[name] ? '' : fields[name]?.validation?.errorMessage;
    }

    const checkedInit = isUndefined(Checked) ? checkedImg : Checked;

    return (
      <CheckboxWrapperDiv onKeyPress={this.onEnterPress}>
        <CheckboxWrapperInnerDiv>
          {renderMark({
            error,
            checked: checkedInit,
            onClick: () => {
              this.onClick();
            },
          })}

          <input
            type="checkbox"
            id={id || name}
            name={name}
            disabled={disabled || formDisable === FORM_DISABLED_STATE.FORM}
            checked={checkedInit}
            onChange={({ currentTarget }) => this.onChange(currentTarget.checked)}
            ref={this.$inputRef}
          />

          <CheckboxTextBlockDiv>
            {label && (
              <CheckboxText forwardedAs="span" variant="subheadline">
                <span
                  onClick={() => {
                    this.onClick();
                  }}
                >
                  {label}
                </span>
              </CheckboxText>
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
          </CheckboxTextBlockDiv>

          {text && (
            <CheckboxInfoText forwardedAs="p" variant="footnote">
              <span
                onClick={() => {
                  this.onClick();
                }}
              >
                {text}
              </span>
            </CheckboxInfoText>
          )}
        </CheckboxWrapperInnerDiv>
      </CheckboxWrapperDiv>
    );
  }
}

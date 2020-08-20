import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Button from '../../button/Button';
import { PLACEMENT, COLOR_MODE } from '../../tooltip/tooltipSettings';
import imagePropTypes from '../constants/propTypes';
import Label from '../../label/Label';
import Input from '../../input/Input';
import Select from '../../select/Select';
import css from '../styles/DetailsSettings.module.css';

const DetailsSettings = ({
  image,
  onSubmit,
  onRemoveImage,
  onSettingsChange,
  onBackButtonClick,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const {
    id,
    url,
    fullSize,
    tooltipText,
    tooltipPlacement,
    tooltipColor,
  } = image;

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onSettingsChange}>
      <div>
        <h3>Image options</h3>
        <Label htmlFor="url" text="Add/Change image:">
          <Input
            type="file"
            name="url"
            id="url"
            value={url}
            ref={register({
              required: !id,
              validate: (value) => value.length && Boolean(value[0].type.match('image.*')),
            })}
            error={errors.url}
            accept="image/*"
          />
        </Label>
        <Label htmlFor="fullSize" text="Fullsize image:" inline>
          <Input
            type="checkbox"
            name="fullSize"
            id="fullSize"
            checked={fullSize}
            ref={register}
          />
        </Label>
        <div className={css.notice}>Recommended min image size: 300 x 300 px</div>
        <h3>Tooltip options</h3>
        <Label htmlFor="tooltipText" text="Tooltip text:">
          <Input
            type="text"
            name="tooltipText"
            id="tooltipText"
            value={tooltipText}
            ref={register({ required: true, maxLength: 150 })}
            error={errors.tooltipText}
          />
        </Label>
        <Label htmlFor="tooltipPlacement" text="Tooltip placement:">
          <Select
            name="tooltipPlacement"
            id="tooltipPlacement"
            value={tooltipPlacement}
            ref={register}
            options={PLACEMENT}
          />
        </Label>
        <Label htmlFor="tooltipColor" text="Tooltip color:">
          <Select
            name="tooltipColor"
            id="tooltipColor"
            value={tooltipColor}
            ref={register}
            options={COLOR_MODE}
          />
        </Label>
      </div>
      <div className={css.actions}>
        <div className={css.button}>
          <Button type="submit" color={Button.COLOR.PRIMARY}>Save</Button>
        </div>
        <div className={css.button}>
          <Button type="button" onClick={onRemoveImage}>Remove image</Button>
        </div>
        <div className={css.button}>
          <Button type="button" onClick={onBackButtonClick}>Back to list</Button>
        </div>
      </div>
    </form>
  );
};

DetailsSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onRemoveImage: PropTypes.func.isRequired,
  onSettingsChange: PropTypes.func.isRequired,
  onBackButtonClick: PropTypes.func.isRequired,
  image: imagePropTypes,
};

DetailsSettings.defaultProps = {
  image: {},
};

export default DetailsSettings;

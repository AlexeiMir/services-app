import React from 'react';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import cx from 'classnames';

export const Button: React.FC<ButtonProps> = ({
	children,
	appearance,
	arrow = 'none',
	className,
	...props
}): JSX.Element => {
	return (
		<button
			className={cx(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cx(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};

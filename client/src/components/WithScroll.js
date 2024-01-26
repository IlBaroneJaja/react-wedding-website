import React, { useEffect, useRef } from 'react';

const withScroll = (WrappedComponent) => {
    const SectionWithScroll = ({ id, forwardedRef, ...props }) => {
        const sectionRef = useRef(forwardedRef || null);

        useEffect(() => {
            if (window.location.hash === `#${id}` && sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, [id]);

        return <WrappedComponent ref={sectionRef} id={id} {...props} />;
    };

    return React.forwardRef((props, ref) => <SectionWithScroll forwardedRef={ref} {...props}  />);
};

export default withScroll;

import React from 'react';
import useElementReferences from './sub-componets-criar-projeto/use-element-references';

/**
 * Higher-Order Component (HOC) that enhances a wrapped component with project logic.
 *
 * @param {React.ComponentType} WrappedComponent - The component to enhance.
 * @returns {React.FunctionComponent} EnhancedComponent - The enhanced component with added project logic.
 */
export default function withProjectLogic(WrappedComponent) {
  
  /**
   * The EnhancedComponent with project logic and references.
   * @param {Object} props - Props passed to the enhanced component.
   * @param props.handleClickProjeto
   * @returns {React.ReactElement} The rendered enhanced component.
   */
  function EnhancedComponent({ ...restProperties }) {
    const { assignReference, getReference, getAllReferences } = useElementReferences();

    return (
      <WrappedComponent
        {...restProperties}
        assignReferenceCallback={assignReference} getSingleReference={getReference}
        getAllReferences={getAllReferences}
      />
    );
  }

  return EnhancedComponent;
}

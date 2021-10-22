import React, { useState } from 'react'
import { ModalContent, ModalFooter, ModalButton, useDialog } from 'react-st-modal';

export default function CustomDialogContent() {
    const dialog = useDialog();

  const [value, setValue] = useState(String)

  return (
      <div>
        <ModalContent>
          <div>Custom dialog content</div>
          <label>
            Input value:
            <input
              type="text"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <ModalButton
            onClick={() => {
              dialog.close(value);
            }}
          >
            Custom button
          </ModalButton>
        </ModalFooter>
      </div>
  );
}

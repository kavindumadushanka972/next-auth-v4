import { updateUser } from '@/actions/authActions';
import React from 'react';
import Button from '../global/Button';
import Form from '../global/Form';

const ProfileUpdate = ({ update }) => {
  async function handleUpdateProfile(formData) {
    const name = formData.get('name');
    const image = formData.get('image');

    /**
     * when update() is run client side, the page will re-render
     * Server side will not re-render
     */
    if (update) {
      update({ name, image });
    }

    const res = await updateUser({ name, image });
    if (res?.msg) alert(res?.msg);
  }

  return (
    <div>
      <h2>Update Profile</h2>

      <Form action={handleUpdateProfile} style={{ margin: '20px 0' }}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="image" placeholder="Image" required />
        <Button value="Update Profile" />
      </Form>
    </div>
  );
};

export default ProfileUpdate;

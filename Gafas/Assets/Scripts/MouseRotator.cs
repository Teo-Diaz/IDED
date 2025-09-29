using UnityEngine;

public class MouseRotator : MonoBehaviour
{
    public float rotationSpeed = 100f;
    public bool invertY = false;

    void Update()
    {
        if (Input.GetMouseButton(0)) // botón izquierdo
        {
            float mouseX = Input.GetAxis("Mouse X") * rotationSpeed * Time.deltaTime;
            float mouseY = Input.GetAxis("Mouse Y") * rotationSpeed * Time.deltaTime;

            transform.Rotate(Vector3.up, -mouseX, Space.World);
            float directionY = invertY ? mouseY : -mouseY;
            transform.Rotate(Vector3.right, directionY, Space.Self);
        }
    }

}
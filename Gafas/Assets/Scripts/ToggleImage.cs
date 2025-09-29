using UnityEngine;

public class ToggleImage : MonoBehaviour
{
    public GameObject infoPanel; // Asigna el Image desde el Inspector

    private bool isVisible = false;

    public void TogglePanel()
    {
        isVisible = !isVisible;
        infoPanel.SetActive(isVisible);
    }
}
using UnityEngine;

public class Toggle : MonoBehaviour
{
    public GameObject infoPanel; // Asigna el Image desde el Inspector

    private bool isVisible = false;

    public void TogglePanel()
    {
        isVisible = !isVisible;
        infoPanel.SetActive(isVisible);
    }
}
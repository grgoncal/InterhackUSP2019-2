using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CommandsBehaviour : MonoBehaviour
{
    [SerializeField]
    private GameObject[] commands;
    [SerializeField]
    private GameObject kevin;
    [SerializeField]
    private GameObject selector;

    private float timer = 0;
    private int index = 0;

    // Update is called once per frame
    void Update()
    {
        timer += Time.fixedDeltaTime;
        if(timer >= 0.3f && index < commands.Length)
        {
            commands[index++].SetActive(true);
            timer = 0;
        }
        else if(index >= commands.Length)
        {
            kevin.GetComponent<KevinBehaviour>().isWalking = true;
            selector.GetComponent<SelectorBehaviour>().isMoving = true;
        }
    }
}

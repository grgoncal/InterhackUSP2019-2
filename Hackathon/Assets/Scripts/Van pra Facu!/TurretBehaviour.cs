using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TurretBehaviour : MonoBehaviour
{
    [SerializeField]
    private GameObject bullet;
    [SerializeField]
    public bool isHacked = false;
    [SerializeField]
    private Transform shotSpawn;

    private float timer = 0;

    // Update is called once per frame
    void Update()
    {
        if(!isHacked)
        {
            timer += Time.fixedDeltaTime;
            if(timer >= 1)
            {
                GameObject newShot = Instantiate(bullet, shotSpawn.position, Quaternion.identity, transform);
                Destroy(newShot, 3);
                timer = 0;

                newShot.GetComponent<Rigidbody>().velocity = shotSpawn.right * -1;

            }            
        }
    }

    private void OnTriggerExit(Collider other) {
        other.gameObject.SetActive(true);
    }

    private void OnTriggerEnter(Collider other) {
        other.gameObject.SetActive(false);
    }
}
